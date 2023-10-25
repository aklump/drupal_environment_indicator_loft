![Environment Indicator Loft](images/screenshot.png)

## Summary

This is an alternative UX by [In the Loft Studios](http://intheloftstudios.com) for the well known Drupal module [Environment Indicator](https://www.drupal.org/project/environment_indicator). It removes the color from the admin toolbar, and wraps the entire screen in a faint edge glow. It provides the GIT branch in the description. It allows hiding the indicator by clicking or double clicking the title/description area.

**Visit <https://aklump.github.io/environment_indicator_loft> for full documentation.**

## Install with Composer

1. Add the following to _composer.json_.
   ```json
   {
     "repositories": [
       {
         "type": "github",
         "url": "https://github.com/aklump/drupal_environment_indicator_loft"
       }
     ]
   }
   ```
1. `composer require aklump_drupal/environment_indicator_loft`

## Quick Start

1. Configure Environment Indicator as per that module's instructions.
1. Go to /admin/config/development/environment-indicator and uncheck all _Toolbar integration_ boxes and _Save configuration_.
1. Do not create an Environment Switcher.
1. Setup the correct permissions.
1. An example configuration is to add something like this to _settings.php_; the constants must be defined previously in some fashion for this example to work.

          switch (DRUPAL_ENV) {
            case DRUPAL_ENV_DEV:
              $config['environment_indicator.indicator']['bg_color'] = '#0ff';
              $config['environment_indicator.indicator']['fg_color'] = '#000';
              $config['environment_indicator.indicator']['name'] = 'Development';
              break;
        
            case DRUPAL_ENV_STAGING:
              $config['environment_indicator.indicator']['bg_color'] = '#0f0';
              $config['environment_indicator.indicator']['fg_color'] = '#000';
              $config['environment_indicator.indicator']['name'] = 'Test';
              break;
        
          }

1. Download this module to _web/modules/custom/_.
1. Enable this module and the UX of the module will change.
1. `drush en environement_indicator_loft`

## Requirements

* [Environment Indicator Drupal module](https://www.drupal.org/project/environment_indicator)

## Contributing

If you find this project useful... please consider [making a donation](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4E5KZHDQCEUV8&item_name=Gratitude%20for%20aklump%2Fenvironment_indicator_loft).

## Usage

* Single click the title in the bottom right hand and the indicator will be hidden for that request.
* Double click the title and a cookie will be set for 30 minutes to hide the indicator. You can use this if you are doing some critical theming and you do not want the visual interference of the border for a time. To control the duration modify this snippet and add to _settings.dev.php_.

        // Set the duration for to 30 minutes for double click hide.
        $config['environment_indicator.indicator']['manual_cookie'] = 1800;

* Hold down META while clicking to access the switcher (@todo This has not been built yet.)

### For a Demonstration Website

You can use something like the following for demo websites:

        <?php
        $config['environment_indicator.indicator']['bg_color'] = '#ff7f00';
        $config['environment_indicator.indicator']['fg_color'] = '#000';
        
        // Let our demo users know their data is not persistent by overridding the message.
        $config['environment_indicator.indicator']['override'] = 'Demonstration Website: Your Data May Be Deleted At Any Time';
        
        // Auto fade-out message after this many seconds, on each page request.
        $config['environment_indicator.indicator']['autofade'] = 3;
        
        // ... don't want to show on every request, use a cookie to hide for this many seconds after showing.  In this example the override message will appear once every 10 minutes.
        $config['environment_indicator.indicator']['throttle'] = 600;

### Permissions Strategy

In all environments EXCEPT live you will need to grant the permission `access environment indicator` to both anonymous and authenticated users. Refer to Drupal 8 Shorts for how to set this up using [Config Split](https://www.drupal.org/project/config_split) and [Config Role Split](https://www.drupal.org/project/config_role_split) modules.

## Scripting

Here is a set of Drush commands that will configure permissions and settings. I add this to a hook that runs after I pull my Live database to my Dev environment to enable and configure the module in one fell swoop.

```bash
 drush en -y environment_indicator_loft
 drush role-add-perm anonymous 'access environment indicator'
 drush role-add-perm authenticated 'access environment indicator'
 drush cdel -y environment_indicator.settings toolbar_integration
 drush cdel -y environment_indicator.settings favicon
```

## Troubleshooting

Any of the following will prevent the border from showing:

1. _Environment Indicator Loft_ is not enabled.
2. _Toolbar_ integration is enabled (checked) as seen at /admin/config/development/environment-indicator
3. The user viewing the site does not have the permission _See environment indicator..._
4. `$config['environment_indicator.indicator']['name']` is set to an empty value.
