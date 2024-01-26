var lunrIndex = [{"id":"changelog","title":"Changelog","body":"All notable changes to this project will be documented in this file.\n\nThe format is based on [Keep a Changelog](https:\/\/keepachangelog.com\/en\/1.0.0\/), and this project adheres to [Semantic Versioning](https:\/\/semver.org\/spec\/v2.0.0.html).\n\n## [1.3] - 2022-02-02\n\n### Added\n\n- Git icon next to the branch name.\n\n### Changed\n\n- To override the output message use `$config['environment_indicator.indicator']['override']`\n- `$config['environment_indicator.indicator']['autocookie']` is now called `$config['environment_indicator.indicator']['throttle']`.\n\n### Removed\n\n- Deprecated.\n\n### Fixed\n\n- The override message was not working.\n\n## [1.1] - 2021-09-01\n\n### Added\n\n- Setting in the admin form to hide for various durations \/admin\/config\/development\/environment-indicator."},{"id":"configuration","title":"Configuration","body":"## How to Handle Modules?\n\n1. Enable [Configuration Split](https:\/\/www.drupal.org\/project\/config_split)\n1. Create a _Development_ (`dev`) split.\n1. In _Complete Split > Modules_ add a check next to:\n    1. Environment Indicator\n    1. Environment Indicator Loft UX\n\n## How to Handle Permissions?\n\n1. Add the following to _settings.php_:\n\n```php\n\/\/ The reason that we're not using DRUPAL_ENV is that if that is overridden to\n\/\/ PROD during local cache testing, the config export will give the wrong\n\/\/ output.  This is a better way to determine that the site is running for a\n\/\/ dev environment for the purposes of config_split module.\n$is_dev_env = getenv('LANDO') !== FALSE;\n$config['config_split.config_split.dev']['status'] = $is_dev_env;\n$config['config_role_split.role_split.dev']['status'] = $is_dev_env;\n$config['config_split.config_split.prod']['status'] = !$is_dev_env;\n```\n\n## When Pulling Live Database\n\nI run the following after importing the live database in my local dev environment.  It seems I have to do both in this order, to get the permissions to import correctly.\n\n```bash\ndrush config-split:import dev -y\ndrush config:import -y\n```"},{"id":"configuring","title":"Configuring","body":"## Via Web UI\n\n1. Open _\/admin\/config\/development\/environment-indicator_\n1. Uncheck all _Toolbar integration_ boxes and _Save configuration_.\n1. Do not create an Environment Switcher.\n\n## Who Sees It?\n\nWhich users will see the indicator is determined by permissions.\n\nSee also [Live Dev Porter](@live_dev_porter).\n\n1. Setup the correct permissions.\n\n## Set the Label\n\nSee also [Snippets](@snippets).\n\n_settings.php_\n\n```php\n$config['environment_indicator.indicator']['name'] = 'Development';\n```\n\n## Set the Colors\n\n_settings.php_\n\n```php\n$config['environment_indicator.indicator']['bg_color'] = '#00339a';\n$config['environment_indicator.indicator']['fg_color'] = '#fff';\n```"},{"id":"live_dev_porter","title":"Configuring with Live Dev Porter","body":"This page refers to usage with [Live Dev Porter](https:\/\/github.com\/aklump\/live_dev_porter)\n\n## Processor\n\n```php\n# Handle the configuration of development modules.\n! lando drush en environment_indicator_loft -y && echo \"Failed to enable development modules.\" && exit 1\nlando drush role-add-perm anonymous 'access environment indicator'\nlando drush role-add-perm authenticated 'access environment indicator'\n```"},{"id":"readme","title":"Environment Indicator Loft UX, a Drupal Module","body":"![Environment Indicator Loft](..\/..\/images\/screenshot.png)\n\n## Summary\n\nThis is an alternative UX by [In the Loft Studios](http:\/\/intheloftstudios.com) for the well known Drupal module [Environment Indicator](https:\/\/www.drupal.org\/project\/environment_indicator). It removes the color from the admin toolbar, and wraps the entire screen in a faint edge glow. It provides the GIT branch in the description. It allows hiding the indicator by clicking or double clicking the title\/description area.\n\nSee [Installing](@installing)\n\n## Requirements\n\n* [Environment Indicator Drupal module](https:\/\/www.drupal.org\/project\/environment_indicator)\n\n## Contributing\n\nIf you find this project useful... please consider [making a donation](https:\/\/www.paypal.com\/cgi-bin\/webscr?cmd=_s-xclick&hosted_button_id=4E5KZHDQCEUV8&item_name=Gratitude%20for%20aklump%2Fenvironment_indicator_loft).\n\n## Usage\n\n* Single click the title in the bottom right hand and the indicator will be hidden for that request.\n* Double click the title and a cookie will be set for 30 minutes to hide the indicator. You can use this if you are doing some critical theming and you do not want the visual interference of the border for a time. To control the duration modify this snippet and add to _settings.dev.php_.\n\n        \/\/ Set the duration for to 30 minutes for double click hide.\n        $config['environment_indicator.indicator']['manual_cookie'] = 1800;\n\n* Hold down META while clicking to access the switcher (@todo This has not been built yet.)\n\n### For a Demonstration Website\n\nYou can use something like the following for demo websites:"},{"id":"installing","title":"Installing","body":"1. Add the following to your project's root _composer.json_.\n   ```json\n   {\n     \"repositories\": [\n       {\n         \"type\": \"github\",\n         \"url\": \"https:\/\/github.com\/aklump\/drupal_environment_indicator_loft\"\n       }\n     ]\n   }\n   ```\n2. `composer require aklump_drupal\/environment_indicator_loft`\n3. `drush en environment_indicator_loft`\n\nNext step [configuring](@configuring)..."},{"id":"ideas","title":"Other Ideas","body":"## Git date and db pull\n\nHere is an idea for showing dates in the label instead of the git branch.  The file _cached_db.txt_ contains an ISO8601 timestamp of when the database was imported from live, so we can report on that date.\n\n        \/**\n         * Implements hook_preprocess_THEME().\n         *\n         * This hook will add the dates the database was last pulled with ldp, and also\n         * the date of the most recent git commit, so assuming the newest the code is.\n         *\/\n        function my_module_preprocess_environment_indicator(&$vars) {\n          $message = ['Live sync:'];\n          if (DRUPAL_ENV !== DRUPAL_ENV_DEV) {\n            $message[] = 'Code @code,';\n          }\n          $message[] = 'Content @content';\n\n          $code = '?';\n          if (($date_of_last_commit = exec('git log -1 --pretty=tformat:%cI'))) {\n            $code = date_create($date_of_last_commit)->format('n\/y');\n          }\n\n          $content = '?';\n          $db_date_file = DRUPAL_ROOT . \"\/..\/.loft_deploy\/prod\/cached_db.txt\";\n          if (file_exists($db_date_file)) {\n            $date_of_database = trim(file_get_contents($db_date_file));\n            $content = date_create($date_of_database)->format('n\/y');\n          }\n\n          $vars['branch'] = t(implode(' ', $message), [\n            '@code' => $code,\n            '@content' => $content,\n          ]);\n        }"},{"id":"snippets","title":"Snippets","body":"_settings.php_\n\n```php\nswitch (DRUPAL_ENV) {\n    case DRUPAL_ENV_DEV:\n      $config['environment_indicator.indicator']['bg_color'] = '#0ff';\n      $config['environment_indicator.indicator']['fg_color'] = '#000';\n      $config['environment_indicator.indicator']['name'] = 'Development';\n      break;\n\n    case DRUPAL_ENV_STAGING:\n      $config['environment_indicator.indicator']['bg_color'] = '#0f0';\n      $config['environment_indicator.indicator']['fg_color'] = '#000';\n      $config['environment_indicator.indicator']['name'] = 'Test';\n      break;\n\n}\n```"}]