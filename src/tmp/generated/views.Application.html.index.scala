
                    package views.Application.html

                    import play.templates._
                    import play.templates.TemplateMagic._
                    import views.html._

                    object index extends BaseScalaTemplate[Html,Format[Html]](HtmlFormat) {

                        def apply/*1.2*/(title:String):Html = {
                            try {
                                _display_ {

format.raw/*1.16*/("""

""")+_display_(/*3.2*/main(title)/*3.13*/ {format.raw/*3.15*/("""
    
    """)+_display_(/*5.6*/views/*5.11*/.defaults.html.welcome(title))+format.raw/*5.40*/("""
    
""")})}
                            } catch {
                                case e:TemplateExecutionError => throw e
                                case e => throw Reporter.toHumanException(e)
                            }
                        }

                    }

                
                /*
                    -- GENERATED --
                    DATE: Fri Dec 16 17:03:01 JST 2011
                    SOURCE: /app/views/Application/index.scala.html
                    HASH: eb312fa4c0e2ba372510dd9e61b53637a774196f
                    MATRIX: 329->1|450->15|478->18|497->29|517->31|553->42|566->47|615->76
                    LINES: 10->1|14->1|16->3|16->3|16->3|18->5|18->5|18->5
                    -- GENERATED --
                */
            
