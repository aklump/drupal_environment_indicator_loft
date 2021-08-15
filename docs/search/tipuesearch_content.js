var tipuesearch = {"pages":[{"title":"Changelog","text":"  All notable changes to this project will be documented in this file.  The format is based on Keep a Changelog, and this project adheres to Semantic Versioning.  [Unreleased]   lorem   [N.N.N] - YYYY-MM-DD  Added   lorem   Changed   lorem   Deprecated   lorem   Removed   lorem   Fixed   lorem   Security   lorem  ","tags":"","url":"CHANGELOG.html"},{"title":"Environment Indicator Loft UX, a Drupal Module","text":"    Summary  This is an alternative UX by In the Loft Studios for the well known Drupal module Environment Indicator. It removes the color from the admin toolbar, and wraps the entire screen in a faint edge glow. It provides the GIT branch in the description. It allows hiding the indicator by clicking or double clicking the title\/description area.  Visit https:\/\/aklump.github.io\/environment_indicator_loft for full documentation.  Quick Start   Configure Environment Indicator as per that module's instructions. Go to \/admin\/config\/development\/environment-indicator and uncheck all Toolbar integration boxes and Save configuration. Do not create an Environment Switcher. Setup the correct permissions. An example configuration is to add something like this to settings.php; the constants must be defined previously in some fashion for this example to work.    switch (DRUPAL_ENV) {     case DRUPAL_ENV_DEV:       $config['environment_indicator.indicator']['bg_color'] = '#0ff';       $config['environment_indicator.indicator']['fg_color'] = '#000';       $config['environment_indicator.indicator']['name'] = 'Development';       break;      case DRUPAL_ENV_STAGING:       $config['environment_indicator.indicator']['bg_color'] = '#0f0';       $config['environment_indicator.indicator']['fg_color'] = '#000';       $config['environment_indicator.indicator']['name'] = 'Test';       break;    }  Download this module to web\/modules\/custom\/. Enable this module and the UX of the module will change. drush en environement_indicator_loft   Requirements   Environment Indicator Drupal module   Contributing  If you find this project useful... please consider making a donation.  Usage   Single click the title in the bottom right hand and the indicator will be hidden for that request. Double click the title and a cookie will be set for 30 minutes to hide the indicator. You can use this if you are doing some critical theming and you do not want the visual interference of the border for a time. To control the duration modify this snippet and add to settings.dev.php.  \/\/ Set the duration for to 30 minutes for double click hide. $config['environment_indicator.indicator']['manual_cookie'] = 1800;  Hold down META while clicking to access the switcher (@todo This has not been built yet.)   For a Demonstration Website  You can use something like the following for demo websites:      &lt;?php     $config['environment_indicator.indicator']['bg_color'] = '#ff7f00';     $config['environment_indicator.indicator']['fg_color'] = '#000';      \/\/ Let our demo users know their data is not persistent.     $config['environment_indicator.indicator']['name'] = 'Demonstration Website: Your Data May Be Deleted At Any Time';      \/\/ Hide the GIT branch for our demo users, they don't care.     $config['environment_indicator.indicator']['branch'] = '';      \/\/ Autofade in this many seconds.     $config['environment_indicator.indicator']['autofade'] = 3;      \/\/ Set a cookie to hide for this many seconds after autofade; autofade must be &gt; 0.     $config['environment_indicator.indicator']['autocookie'] = 600;   Permissions Strategy  In all environments EXCEPT live you will need to grant the permission access environment indicator to both anonymous and authenticated users. Refer to Drupal 8 Shorts for how to set this up using Config Split and Config Role Split modules.  Scripting  Here is a set of Drush commands that will configure permissions and settings. I add this to a hook that runs after I pull my Live database to my Dev environment to enable and configure the module in one fell swoop.   drush en -y environment_indicator_loft  drush role-add-perm anonymous 'access environment indicator'  drush role-add-perm authenticated 'access environment indicator'  drush cdel -y environment_indicator.settings toolbar_integration  drush cdel -y environment_indicator.settings favicon   Contact The Developer  In the Loft Studios Aaron Klump - Web Developer sourcecode@intheloftstudios.com 360.690.6432 PO Box 29294 Bellingham, WA 98228-1294  http:\/\/www.intheloftstudios.com https:\/\/github.com\/aklump ","tags":"","url":"README.html"},{"title":"Summary","text":"  This is an alternative UX by In the Loft Studios for the well known Drupal module Environment Indicator. It removes the color from the admin toolbar, and wraps the entire screen in a faint edge glow. It provides the GIT branch in the description. It allows hiding the indicator by clicking or double clicking the title\/description area.  Visit https:\/\/aklump.github.io\/environment_indicator_loft for full documentation.  Quick Start   Configure Environment Indicator as per that module's instructions. Go to \/admin\/config\/development\/environment-indicator and uncheck all Toolbar integration boxes and Save configuration. Do not create an Environment Switcher. Setup the correct permissions. An example configuration is to add something like this to settings.php; the constants must be defined previously in some fashion for this example to work.    switch (DRUPAL_ENV) {     case DRUPAL_ENV_DEV:       $config['environment_indicator.indicator']['bg_color'] = '#0ff';       $config['environment_indicator.indicator']['fg_color'] = '#000';       $config['environment_indicator.indicator']['name'] = 'Development';       break;      case DRUPAL_ENV_STAGING:       $config['environment_indicator.indicator']['bg_color'] = '#0f0';       $config['environment_indicator.indicator']['fg_color'] = '#000';       $config['environment_indicator.indicator']['name'] = 'Test';       break;    }  Download this module to web\/modules\/custom\/. Enable this module and the UX of the module will change. drush en environement_indicator_loft   Requirements   Environment Indicator Drupal module   Contributing  If you find this project useful... please consider making a donation.  Usage   Single click the title in the bottom right hand and the indicator will be hidden for that request. Double click the title and a cookie will be set for 30 minutes to hide the indicator. You can use this if you are doing some critical theming and you do not want the visual interference of the border for a time. To control the duration modify this snippet and add to settings.dev.php.  \/\/ Set the duration for to 30 minutes for double click hide. $config['environment_indicator.indicator']['manual_cookie'] = 1800;  Hold down META while clicking to access the switcher (@todo This has not been built yet.)   For a Demonstration Website  You can use something like the following for demo websites:      &lt;?php     $config['environment_indicator.indicator']['bg_color'] = '#ff7f00';     $config['environment_indicator.indicator']['fg_color'] = '#000';      \/\/ Let our demo users know their data is not persistent.     $config['environment_indicator.indicator']['name'] = 'Demonstration Website: Your Data May Be Deleted At Any Time';      \/\/ Hide the GIT branch for our demo users, they don't care.     $config['environment_indicator.indicator']['branch'] = '';      \/\/ Autofade in this many seconds.     $config['environment_indicator.indicator']['autofade'] = 3;      \/\/ Set a cookie to hide for this many seconds after autofade; autofade must be &gt; 0.     $config['environment_indicator.indicator']['autocookie'] = 600;   Permissions Strategy  In all environments EXCEPT live you will need to grant the permission access environment indicator to both anonymous and authenticated users. Refer to Drupal 8 Shorts for how to set this up using Config Split and Config Role Split modules.  Scripting  Here is a set of Drush commands that will configure permissions and settings. I add this to a hook that runs after I pull my Live database to my Dev environment to enable and configure the module in one fell swoop.   drush en -y environment_indicator_loft  drush role-add-perm anonymous 'access environment indicator'  drush role-add-perm authenticated 'access environment indicator'  drush cdel -y environment_indicator.settings toolbar_integration  drush cdel -y environment_indicator.settings favicon  ","tags":"","url":"drupal_project_page.html"},{"title":"Other Ideas","text":"  Git date and db pull  Here is an idea for showing dates in the label instead of the git branch.  The file cached_db.txt contains an ISO8601 timestamp of when the database was imported from live, so we can report on that date.      \/**      * Implements hook_preprocess_THEME().      *      * This hook will add the dates the database was last pulled with ldp, and also      * the date of the most recent git commit, so assuming the newest the code is.      *\/     function my_module_preprocess_environment_indicator(&amp;$vars) {       $message = ['Live sync:'];       if (DRUPAL_ENV !== DRUPAL_ENV_DEV) {         $message[] = 'Code @code,';       }       $message[] = 'Content @content';        $code = '?';       if (($date_of_last_commit = exec('git log -1 --pretty=tformat:%cI'))) {         $code = date_create($date_of_last_commit)-&gt;format('n\/y');       }        $content = '?';       $db_date_file = DRUPAL_ROOT . \"\/..\/.loft_deploy\/prod\/cached_db.txt\";       if (file_exists($db_date_file)) {         $date_of_database = trim(file_get_contents($db_date_file));         $content = date_create($date_of_database)-&gt;format('n\/y');       }        $vars['branch'] = t(implode(' ', $message), [         '@code' =&gt; $code,         '@content' =&gt; $content,       ]);     }  ","tags":"","url":"ideas.html"},{"title":"Search Results","text":" ","tags":"","url":"search--results.html"}]};
