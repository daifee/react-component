<% pages.forEach(function (page) { %>
import <%- page %> from './pages/<%- page %>.js';
<% }) %>

const mapping = [
  <% pages.forEach(function (page) { %>
  {name: '<%- page %>', component: <%- page %>},
  <% }) %>
];

export default mapping;
