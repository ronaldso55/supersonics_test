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
      location: "main#sessions"
    }
    {
      title: "Tools"
      id: "tools"
      location: "main#tools"
    }
    {
      title: "Profile"
      id: "profile"
      location: "main#profile"
    }
  ]

