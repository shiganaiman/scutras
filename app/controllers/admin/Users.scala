package controllers.admin

import play.api.mvc.Action
import play.api.mvc.Controller

object Users extends Controller {

  def index = Action{
    Ok(views.html.admin.users.index("a presentation."));
  }

  def edit = TODO

  def update = TODO

}