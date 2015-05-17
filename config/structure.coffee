# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  rootView:
    location: "main#sessions"

  initialView:
    id: "initialView"
    location: "main#initial-view"

  tabs: [
    {
      title: "Sessions"
      id: "sessions"
      location: "http://localhost/app/main/sessions/sessions.html"
    }
    {
      title: "Tools"
      id: "tools"
      location: "http://localhost/app/main/tools/tools.html"
    }
    {
      title: "Profile"
      id: "profile"
      location: "http://localhost/app/main/profile/profile.html"
    }
  ]

