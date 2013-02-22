package persists

import play.api.Play.current
import com.novus.salat.dao._
import com.mongodb.casbah.Imports._
import se.radley.plugin.salat._

case class User(
                 id: ObjectId = new ObjectId,
                 account: String,
                 username: String,
                 password: String,
                 email: Option[String] = None) {
  def equals(that: Any): Boolean = {
    return super.equals(that);
  }
}

object User extends ModelCompanion[User, ObjectId] {
  val dao = new SalatDAO[User, ObjectId](collection = mongoCollection("users")) {}

  def findOneByUsername(username: String): Option[User] = {
    dao.findOne(MongoDBObject("username" -> username))
  }
}