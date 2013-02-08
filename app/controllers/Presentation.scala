package controllers

import play.api._
import play.api.mvc._

object Presentaion extends Controller {
  
  def index = Action {
    Ok(views.html.index("a presentation."))
  }
  
}