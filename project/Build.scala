import sbt._
import Keys._
import play.Project._

object ApplicationBuild extends Build {

  val appName = "scutras"
  val appVersion = "1.0-SNAPSHOT"
  val appDependencies = Seq(
    // Add your project dependencies here,
//   jdbc,
//   anorm,
   "se.radley" %% "play-plugins-salat" % "1.2",
   "com.artofsolving" % "jodconverter" % "2.2.1")

  val main = play.Project(appName, appVersion, appDependencies).settings(
		  resolvers += "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots",
		  requireJs += "main.js",
		  routesImport += "se.radley.plugin.salat.Binders._",
		  templatesImport += "org.bson.types.ObjectId"
	)
}
