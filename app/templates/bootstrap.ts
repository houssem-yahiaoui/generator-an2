import {bootstrap} from 'angular2/angular2';
import {<%if(namConv === "yes"){%><%=appName+"Component"%><%}%><%if(namConv === "no"){%><%=appName%><%}%>} from './<% if(namConv === "yes"){%><%=appName+".Component"%><%}%><%if(namConv === "no"){%><%=appName%><%}%>';

bootstrap(<%if(namConv === "yes"){%><%=appName+"Component"%><%}%><% if(namConv === "no"){%><%=appName%><%}%>);