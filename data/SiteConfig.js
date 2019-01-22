module.exports = {
  siteTitle: "ONE Coventry", // Site title.
  siteTitleShort: "ONE Coventry", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "ONE Coventry", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vagr9k.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "ONE Coventry", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Father Christmas", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar:
    "https://us.123rf.com/450wm/pooterjon/pooterjon0912/pooterjon091200015/6106186-a-cute-cartoon-santa-in-a-snowy-circle-.jpg", // User avatar to display in the author segment.
  userDescription:
    "Ho, ho, ho, my name is Santa Claus. I hope you've all been good boys and girls this year! 🎁", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Announcements",
      url: "/empty",
      iconClassName: "fa fa-bullhorn"
    },
    {
      label: "Messages",
      url: "/empty",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Groups",
      url: "/groups",
      iconClassName: "fa fa-soccer-ball-o"
    },
    {
      label: "Directory",
      url: "/empty",
      iconClassName: "fa fa-address-book"
    },
    {
      label: "Wellbeing",
      url: "/empty",
      iconClassName: "fa fa-heartbeat"
    }
  ],
  copyright: "ESFA" // Copyright string for the footer of the website and RSS feed.
};
