import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName         = "scutras"
  val appVersion      = "1.0-SNAPSHOT"

  val appDependencies = Seq(
    // Add your project dependencies here,
      "com.artofsolving" % "jodconverter" % "2.2.1",
      jdbc,
      anorm
  )


  val main = play.Project(appName, appVersion, appDependencies).settings(
    // Add your own project settings here      
  )

}
