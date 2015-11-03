import {Component} from 'angular2/angular2';

@Component({
	selector: '<%= compName %>',
	templateUrl: '<% if (namConv === "yes") {%> <%="App/"+compName+".Component.html"%> <%}%><%  if (namConv === "no"){%> <%="App/"+compName+".html"%> <%}%>',
	styleUrls: ['<% if (namConv === "yes") {%> <%="App/"+compName+".Component.css"%> <%}%><%  if (namConv === "no"){%> <%="App/"+compName+".css"%> <%}%>']
})

export class <%if (namConv === "yes") {%><%=compName+"Component"%> <%}%><% if(namConv === "no"){%><%=compName%> <%}%> {

}