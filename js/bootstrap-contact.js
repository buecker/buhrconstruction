




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>bootstrap-contact/js/bootstrap-contact.js at master · jackilyn/bootstrap-contact</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jackilyn/bootstrap-contact" name="twitter:title" /><meta content="bootstrap-contact - Simple PHP contact form using bootstrap and the jQuery validation plugin." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/32527?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/32527?s=400" property="og:image" /><meta content="jackilyn/bootstrap-contact" property="og:title" /><meta content="https://github.com/jackilyn/bootstrap-contact" property="og:url" /><meta content="bootstrap-contact - Simple PHP contact form using bootstrap and the jQuery validation plugin." property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="4582177A:2D01:2A39C18:53922AEE" name="octolytics-dimension-request_id" /><meta content="7785394" name="octolytics-actor-id" /><meta content="bart-insight" name="octolytics-actor-login" /><meta content="2a78d25e0c6de0975479a4b3f57d6807ed229aaaec2aa58539aeaeb3cf91b07e" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="B7llXmFTIsrbVe/MszrWrf/qZWIOWu4AnS4z4DzJUANrulfIAMnC5kJhIYGqk6Fd+ztPqwvk5hExuN5aaKpedg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-60205a535d197db61740a88542c95f8052fbd432.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-989250fa8021ddd96df113102c87dc3449d7a656.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="868da0bc9485d31508b2861e22527172">

      
  <meta name="description" content="bootstrap-contact - Simple PHP contact form using bootstrap and the jQuery validation plugin." />

  <meta content="32527" name="octolytics-dimension-user_id" /><meta content="jackilyn" name="octolytics-dimension-user_login" /><meta content="3121915" name="octolytics-dimension-repository_id" /><meta content="jackilyn/bootstrap-contact" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3121915" name="octolytics-dimension-repository_network_root_id" /><meta content="jackilyn/bootstrap-contact" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/jackilyn/bootstrap-contact/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-contact:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="bart-insight"
      data-repo="jackilyn/bootstrap-contact"
      data-branch="master"
      data-sha="cad20bae8b06c6c401586bb496740aedf427916c"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="jackilyn/bootstrap-contact" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/bart-insight" class="name">
        <img alt="bart-insight" class=" js-avatar" data-user="7785394" height="20" src="https://avatars1.githubusercontent.com/u/7785394?s=140" width="20" /> bart-insight
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="jackilyn/bootstrap-contact">This repository</span>
    </li>
      <li>
        <a href="/jackilyn/bootstrap-contact/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="VfHVQoCVvc7D1ka8j5EPpHmEJQs1148+CufFV5mPP/W5gm90orYjKuQuFTynpZrBRQQNCzKdtMMStmI7zTleZg==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3121915" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/jackilyn/bootstrap-contact/watchers">
        14
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/jackilyn/bootstrap-contact/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Q6QIYo0nif1sA/3lJ4TTvlXMEkS3Gs2YsGsZwqwoXMEnPglQgjsQhV0mfb5OzBK6CJ1K9SPe5LI2tHe1oX+2TQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar jackilyn/bootstrap-contact">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/jackilyn/bootstrap-contact/stargazers">
          52
        </a>
</form>
    <form accept-charset="UTF-8" action="/jackilyn/bootstrap-contact/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="/cW5OYyhPpXt4R7ATzETLUhEHEQzss3X1TvD2oE/TwPv0P2makNsHZiWpRfq30AkW4s4pcIO/UJEA3t7ZzKYBA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star jackilyn/bootstrap-contact">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </button>
        <a class="social-count js-social-count" href="/jackilyn/bootstrap-contact/stargazers">
          52
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/jackilyn/bootstrap-contact/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of jackilyn/bootstrap-contact to your account" aria-label="Fork your own copy of jackilyn/bootstrap-contact to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span><span class="text">Fork</span>
          </a>
          <a href="/jackilyn/bootstrap-contact/network" class="social-count">35</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/jackilyn" class="url fn" itemprop="url" rel="author"><span itemprop="title">jackilyn</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jackilyn/bootstrap-contact" class="js-current-repository js-repo-home-link">bootstrap-contact</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/jackilyn/bootstrap-contact" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jackilyn/bootstrap-contact">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/jackilyn/bootstrap-contact/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /jackilyn/bootstrap-contact/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/jackilyn/bootstrap-contact/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /jackilyn/bootstrap-contact/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/jackilyn/bootstrap-contact/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /jackilyn/bootstrap-contact/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/jackilyn/bootstrap-contact/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /jackilyn/bootstrap-contact/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/jackilyn/bootstrap-contact/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /jackilyn/bootstrap-contact/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/jackilyn/bootstrap-contact/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /jackilyn/bootstrap-contact/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jackilyn/bootstrap-contact.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jackilyn/bootstrap-contact.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:jackilyn/bootstrap-contact.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:jackilyn/bootstrap-contact.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/jackilyn/bootstrap-contact" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jackilyn/bootstrap-contact" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/jackilyn/bootstrap-contact" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save jackilyn/bootstrap-contact to your computer and use it in GitHub Desktop." aria-label="Save jackilyn/bootstrap-contact to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/jackilyn/bootstrap-contact/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download jackilyn/bootstrap-contact as a zip file"
                   title="Download jackilyn/bootstrap-contact as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/jackilyn/bootstrap-contact/blob/0df3c52bae691ee56c861b15b843ebcc5b48335f/js/bootstrap-contact.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:9a4b098fadec4b4467eac72534acce59 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/jackilyn/bootstrap-contact/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jackilyn/bootstrap-contact/blob/master/js/bootstrap-contact.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jackilyn/bootstrap-contact" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap-contact</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jackilyn/bootstrap-contact/tree/master/js" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap-contact.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="js/bootstrap-contact.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Jackilyn Hoxworth" class="main-avatar js-avatar" data-user="32527" height="24" src="https://avatars1.githubusercontent.com/u/32527?s=140" width="24" />
      <span class="author"><a href="/jackilyn" rel="author">jackilyn</a></span>
      <time datetime="2013-08-15T09:11:23-07:00" is="relative-time">August 15, 2013</time>
      <div class="commit-title">
          <a href="/jackilyn/bootstrap-contact/commit/8a754660562b44d6079bcf5caa8f5bb9f09225d7" class="message" data-pjax="true" title="Update to Bootstrap 3.">Update to Bootstrap 3.</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Jackilyn Hoxworth" class=" js-avatar" data-user="32527" height="24" src="https://avatars1.githubusercontent.com/u/32527?s=140" width="24" />
            <a href="/jackilyn">jackilyn</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>68 lines (66 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.055 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w js-conduit-openfile-check"
               href="http://mac.github.com"
               data-url="github-mac://openRepo/https://github.com/jackilyn/bootstrap-contact?branch=master&amp;filepath=js%2Fbootstrap-contact.js"
               aria-label="Open this file in GitHub for Mac"
               data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/jackilyn/bootstrap-contact/edit/master/js/bootstrap-contact.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/jackilyn/bootstrap-contact/raw/master/js/bootstrap-contact.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/jackilyn/bootstrap-contact/blame/master/js/bootstrap-contact.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/jackilyn/bootstrap-contact/commits/master/js/bootstrap-contact.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/jackilyn/bootstrap-contact/delete/master/js/bootstrap-contact.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/* Bootstrap Contact Form</span></div><div class='line' id='LC2'><span class="cm"> ***************************************************************************/</span></div><div class='line' id='LC3'><span class="nx">$</span><span class="p">(</span><span class="nb">document</span><span class="p">).</span><span class="nx">ready</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC4'>	<span class="c1">// validate signup form on keyup and submit</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'>	<span class="kd">var</span> <span class="nx">validator</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;#contactform&quot;</span><span class="p">).</span><span class="nx">validate</span><span class="p">({</span></div><div class='line' id='LC7'>		<span class="nx">errorClass</span><span class="o">:</span><span class="s1">&#39;has-error&#39;</span><span class="p">,</span></div><div class='line' id='LC8'>		<span class="nx">validClass</span><span class="o">:</span><span class="s1">&#39;has-success&#39;</span><span class="p">,</span></div><div class='line' id='LC9'>		<span class="nx">errorElement</span><span class="o">:</span><span class="s1">&#39;div&#39;</span><span class="p">,</span></div><div class='line' id='LC10'>		<span class="nx">highlight</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">errorClass</span><span class="p">,</span> <span class="nx">validClass</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC11'>			<span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">closest</span><span class="p">(</span><span class="s1">&#39;.form-control&#39;</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">errorClass</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">validClass</span><span class="p">);</span></div><div class='line' id='LC12'>		<span class="p">},</span></div><div class='line' id='LC13'>		<span class="nx">unhighlight</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">errorClass</span><span class="p">,</span> <span class="nx">validClass</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC14'>			<span class="nx">$</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">parents</span><span class="p">(</span><span class="s2">&quot;.has-error&quot;</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">errorClass</span><span class="p">).</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">validClass</span><span class="p">);</span></div><div class='line' id='LC15'>		<span class="p">},</span></div><div class='line' id='LC16'>		<span class="nx">rules</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC17'>			<span class="nx">contactname</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC18'>				<span class="nx">required</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC19'>				<span class="nx">minlength</span><span class="o">:</span> <span class="mi">2</span></div><div class='line' id='LC20'>			<span class="p">},</span></div><div class='line' id='LC21'>			<span class="nx">email</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC22'>				<span class="nx">required</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC23'>				<span class="nx">email</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC24'>			<span class="p">},</span></div><div class='line' id='LC25'>			<span class="nx">weburl</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC26'>				<span class="nx">required</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC27'>				<span class="nx">url</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC28'>			<span class="p">},</span></div><div class='line' id='LC29'>			<span class="nx">phone</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC30'>				<span class="nx">required</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC31'>				<span class="nx">phoneUS</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC32'>			<span class="p">},</span></div><div class='line' id='LC33'>			<span class="nx">subject</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC34'>				<span class="nx">required</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC35'>			<span class="p">},</span></div><div class='line' id='LC36'>			<span class="nx">message</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC37'>				<span class="nx">required</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC38'>				<span class="nx">minlength</span><span class="o">:</span> <span class="mi">10</span></div><div class='line' id='LC39'>			<span class="p">}</span></div><div class='line' id='LC40'>		<span class="p">},</span></div><div class='line' id='LC41'>		<span class="nx">messages</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC42'>			<span class="nx">contactname</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC43'>				<span class="nx">required</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;Please enter your name.&lt;/span&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC44'>				<span class="nx">minlength</span><span class="o">:</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;Your name needs to be at least {0} characters.&lt;/span&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC45'>			<span class="p">},</span></div><div class='line' id='LC46'>			<span class="nx">email</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC47'>				<span class="nx">required</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;Please enter a valid email address.&lt;/span&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC48'>				<span class="nx">minlength</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;Please enter a valid email address.&lt;/span&gt;&#39;</span></div><div class='line' id='LC49'>			<span class="p">},</span></div><div class='line' id='LC50'>			<span class="nx">weburl</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC51'>				<span class="nx">required</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;You need to enter the address to your website.&lt;/span&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC52'>				<span class="nx">url</span><span class="o">:</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;You need to enter a valid URL.&lt;/span&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC53'>			<span class="p">},</span></div><div class='line' id='LC54'>			<span class="nx">phone</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC55'>				<span class="nx">required</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;You need to enter your phone number.&lt;/span&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC56'>				<span class="nx">phoneUS</span><span class="o">:</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;You need to enter a valid phone number.&lt;/span&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC57'>			<span class="p">},</span></div><div class='line' id='LC58'>			<span class="nx">subject</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC59'>				<span class="nx">required</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;You need to enter a subject.&lt;/span&gt;&#39;</span></div><div class='line' id='LC60'>			<span class="p">},</span></div><div class='line' id='LC61'>			<span class="nx">message</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC62'>				<span class="nx">required</span><span class="o">:</span> <span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;You need to enter a message.&lt;/span&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC63'>				<span class="nx">minlength</span><span class="o">:</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">format</span><span class="p">(</span><span class="s1">&#39;&lt;span class=&quot;help-block&quot;&gt;Enter at least {0} characters.&lt;/span&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC64'>			<span class="p">}</span></div><div class='line' id='LC65'>		<span class="p">}</span></div><div class='line' id='LC66'>	<span class="p">});</span></div><div class='line' id='LC67'><span class="p">});</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04623s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-e87aa86ffae369acf33a96bb6567b2b57183be57.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-41a23288068e4484cfbf360335086f7062a5c29f.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

