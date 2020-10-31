import Controller from '@ember/controller';
import {action} from '@ember/object'

export default class TestingController extends Controller {

  @action moveNode(){
    document.querySelector(".duet-date__dialog-content").appendChild(document.querySelector("#ember323"))
  }
}
