---
title: android chrome flags
description: hidden settings that should be enabled by default
image: /pages/secret.jpg
permalink: /android-chrome-flags/
redirect_from:
  - /android/
  - /chrome/
  - /flags/
layout: page
published: true
---

![secrets]({{ page.image }})

# {{ page.description }}

i intend to keep, as a backup and sharing, somewhere online, an updated and simple list of flags that should be enabled by default. suggestions are (currently) encouraged!

<span class="flags">
```
chrome://flags/

Contextual Search definitions
Enables tap-activated contextual definitions of words on a page to be presented in the caption of the Tap to Search Bar. – Android

#contextual-search-definitions

Contextual Search long-press Resolves
Enables communicating with Google servers when a long-press gesture is recognized under some privacy-limited conditions. The page context data sent to Google is potentially privacy sensitive! – Android

#contextual-search-longpress-resolve

Contextual Search ML tap suppression
Enables tap gestures to be suppressed to improve CTR by applying machine learning. The "Contextual Search Ranker prediction" flag must also be enabled! – Android

#contextual-search-ml-tap-suppression

Contextual Search Ranker prediction
Enables prediction of tap gestures using Assist-Ranker machine learning. – Android

#contextual-search-ranker-query

Contextual Search second tap triggering
Enables triggering on a second tap gesture even when Ranker would normally suppress that tap. – Android

#contextual-search-second-tap

Overscroll history navigation
History navigation in response to horizontal overscroll. – Windows, Linux, Chrome OS, Android

#overscroll-history-navigation

Chrome Duet
Enables Chrome Duet, split toolbar Chrome Home, on Android. – Android

#enable-chrome-duet

Chrome Duet Labels
Enables Chrome Duet (split toolbar) labels. – Android

#enable-chrome-duet-labels

Chrome Sharing Hub
Enables the Chrome Sharing Hub/custom share sheet. – Android

#chrome-sharing-hub

Enables live page sharing of offline pages
Enables to share current loaded page as offline page by saving as MHTML first. – Android

#offline-pages-live-page-sharing

Enable offering upload of Autofilled credit cards
Enables a new option to upload credit cards to Google Payments for sync to all Chrome devices. – Mac, Windows, Linux, Chrome OS, Android

#enable-autofill-credit-card-upload

Omnibox rich entity suggestions
Display entity suggestions using images and an enhanced layout; showing more context and descriptive text about the entity. – Mac, Windows, Linux, Chrome OS, Android

#omnibox-rich-entity-suggestions

Enable the revamped context menu
Enables a revamped context menu when a link, image, or video is long pressed within Chrome. – Android

#enable-revamped-context-menu

Enable download rename
Enables rename option for downloads – Android

#download-rename

Unified Consent
Enables a unified management of user consent for privacy-related features. This includes new confirmation screens and improved settings pages. – Mac, Windows, Linux, Chrome OS, Android

#unified-consent

Suggest to close Tabs
Suggests to the user to close Tabs that haven't been used beyond a configurable threshold or where duplicates of Tabs exist. The threshold is configurable. – Android

#enable-close-tab-suggestions

Tab Groups
Allows users to create groups to better organize their tabs. – Android

#enable-tab-groups

Tab Groups Continuation
Allows users to access continuation features in Tab Group. – Android

#enable-tab-groups-continuation

Tab Groups UI Improvements
Allows users to access new features in Tab Group UI. – Android

#enable-tab-groups-ui-improvements

Tab Engagement Metrics
Tracks tab engagement and lifetime metrics. – Android

#enable-tab-engagement-reporting

Duet-TabStrip Integration
Allows users to access integration of Duet and TabStrip. – Android

#enable-duet-tabstrip-integration

An ephemeral Preview Tab in an Overlay Panel
Enable a 'Preview page/image' at a linked page into an overlay. – Android

#enable-ephemeral-tab

Periodic Background Sync
If enabled, web apps can periodically sync content in the background. – Mac, Windows, Linux, Chrome OS, Android

#periodic-background-sync

Android Chrome UI dark mode
If enabled, user can enable Android Chrome UI dark mode through settings. – Android

#enable-android-night-mode
```
</span>
