# Environment Indicator Loft UX, a Drupal Module

![Environment Indicator Loft](images/screenshot.png)

## Summary

This is an alternative UX by [In the Loft Studios](http://intheloftstudios.com) for the well known Drupal module [Environment Indicator](https://www.drupal.org/project/environment_indicator). It removes the color from the admin toolbar, and wraps the entire screen in a faint edge glow. It provides the GIT branch in the description. It allows hiding the indicator by clicking or double clicking the title/description area.

See [Installing](@installing)



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


## Contact The Developer

* In the Loft Studios
* Aaron Klump - Web Developer
* sourcecode@intheloftstudios.com
* 360.690.6432
* PO Box 29294 Bellingham, WA 98228-1294
* <http://www.intheloftstudios.com>
* <https://github.com/aklump>
