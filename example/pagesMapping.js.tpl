<% pages.forEach(function (page) { %>
import <%- page %> from './pages/<%- page %>.js';
<% }) %>

export default = [
  <% pages.forEach(function (page) { %>
  {name: '<%- page %>', component: <%- page %>}
  <% }) %>
];
