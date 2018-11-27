const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Alexander Apostolov - Front End Web Development and WordPress', // Navigation and Site Title
  siteTitleAlt: 'Alexander Apostolov', // Alternative Site title for SEO
  siteUrl: 'https://AlexanderApostolov.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Developer for hire with experience in ReactJS and WordPress.',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@AlexanderApostolov', // Twitter Username
  ogSiteName: 'Alexander Apostolov', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
