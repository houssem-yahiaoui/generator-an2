import {bootstrap} from 'angular2/angular2';
import {<%if(namConv === "yes"){%><%=compName+"Component"%><%}%><%if(namConv === "no"){%><%=compName %><%}%>} from './<%if(namConv === "yes"){%><%=compName+".Component"%><%}%><%if(namConv === "no"){%><%=compName%><%}%>';

bootstrap(<% if (namConv === "yes") {%><%=compName+"Component"%><%}%><%if(namConv === "no"){%><%=compName%><%}%>);