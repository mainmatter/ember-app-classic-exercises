import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';


export default Controller.extend({
  output: htmlSafe("<p onmouseenter='javascript:alert(`You have been hacked`);'><em>Hello</em> <strong>world</strong>!</p>"),
});
