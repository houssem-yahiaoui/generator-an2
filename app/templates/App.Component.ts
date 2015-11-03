import {Component, FORM_DIRECTIVES} from 'angular2/angular2';

@Component ({
	selector : 'my-app',
	templateUrl: '<%if(namConv === "yes"){%><%="App/"+appName+".Component.html"%><%}%><%if(namConv === "no"){%><%="App/"+appName+".html"%><%}%>',
	styleUrls : ['<%if(namConv === "yes"){%><%="App/"+appName+".Component.css"%><%}%><%if(namConv === "no"){%><%="App/"+appName+".css"%><%}%>'],
	directives: [FORM_DIRECTIVES]
})

export class <% if(namConv === "yes"){%><%=appName+"Component" %><%}%><%if(namConv === "no"){%><%=appName%><%}%> {
	public heroName: string = "Test Angularjs 2 Data Binding :";
}