package controllers

import play.api.mvc.Action
import play.api.mvc.Controller

object Tasks extends Controller {

  def list = TODO

  def index(id: Long) = Action {
    Ok(views.html.tasks.index("a presentation."));
  }
  def create = TODO
  def delete(id: Long) = TODO

}
