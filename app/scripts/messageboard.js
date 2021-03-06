// This import loads the firebase namespace along with all its type information.
import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyADWQW2m0LOHMLhjbv27iQwQjVKLvIiqEw",
    authDomain: "secrets-74e91.firebaseapp.com",
    databaseURL: "https://secrets-74e91.firebaseio.com",
    projectId: "secrets-74e91"
};
firebase.initializeApp(config);
//DB auth
firebase.auth().signInAnonymously().catch(function(error) {
    console.log(error.code);
    console.log(error.message);
});

const language	= localStorage['lng'] || 'en' ;

document.title = language == "es" ? "Mensajes" : "Messages";

var fixdate = function(d){
    var date = d.toString();
    if (date.length == 1) {
        date = "0"+date;
    }
    return date;
};

var months = {
    en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]
};

var getDateByLang = function(lang, fecha){
    var dte;
    if(lang == "en"){
        dte = "On " + months["en"][fecha.getMonth()] + " " + fixdate(fecha.getDate()) + " " + fecha.getFullYear() + " at " + fecha.getHours() + ":" + fixdate(fecha.getMinutes());
        return dte;
    }
    dte = "El " + fixdate(fecha.getDate()) + " de " + months[language][fecha.getMonth()] + " de " + fecha.getFullYear() + " a las " + fecha.getHours() + ":" + fixdate(fecha.getMinutes());
    return dte;
};
firebase.auth().onAuthStateChanged(function(user) {
//Load messages from firebase
var messages = firebase.database().ref('messages').orderByChild("timestamp").on('value', function(snapshot) {
    var messagelist = document.getElementById("message-list");
    while (messagelist.hasChildNodes()) {
        messagelist.removeChild(messagelist.lastChild);
    }
	snapshot.forEach(function(childSnapshot) {
		var key = childSnapshot.key;
		var childData = childSnapshot.val();

        var fecha = new Date(childData.timestamp);
        var dte = getDateByLang(language,fecha);
        var name = childData.name;
        var email = childData.email;
        var message = childData.message;

        var title = document.createElement("div");
        title.style.className = "message-title-header";
        title.style.background = "rgba(0,0,0,0.4)";
        title.style.color = "white";
        title.innerHTML = "<p class='message-title'> " + dte + " <strong>" + name + "</strong> ("+email+")" + (language == "es"? " escribió":" wrote") + ": </p>";

        var msg = document.createElement("div");
        msg.style.height = "80px";
        msg.style.background = "rgba(0,0,0,0.4)";
        msg.style.color = "white";

        var messagearea = document.createElement("div");
        messagearea.className = "message-area";
        messagearea.innerHTML = message;

        msg.appendChild(messagearea);

        var item = document.createElement('div');
        item.appendChild(title);
        item.appendChild(msg);
        messagelist.insertBefore(item, messagelist.childNodes[0]);
	});
});
});

let board = document.querySelector('#page-content');
System.import(`../tpl/partials/messages.${language}.njk`).then(function(m) {
	console.log(m);
	let tpl = m;
	var html = tpl.render({});
    board.innerHTML = html
});