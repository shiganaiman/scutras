package controllers

import play.api.mvc.Action
import play.api.mvc.Controller

object Presentations extends Controller {
  
  def list = TODO

  def index(id:Long) = Action {
    Ok(views.html.presentations.index("a presentation."));
  }
  
  def create = TODO
  def delete(id:Long) = TODO
  

}