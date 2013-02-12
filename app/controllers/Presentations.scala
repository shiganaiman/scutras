package controllers

import play.api.mvc.Action
import play.api.mvc.Controller

object Presentations extends Controller {
  
  def list = Action {
    Ok(views.html.index("a presentation."));
  }

  def index(id:Long) = TODO
  def create = TODO
  def delete(id:Long) = TODO
  

}