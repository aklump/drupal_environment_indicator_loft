<!--
id: configuring
tags: ''
-->

# Configuring

Please read @see [Aaron's Strategy](@aarons_strategy) as well.

## Via Web UI

1. Open _/admin/config/development/environment-indicator_
2. Uncheck _Toolbar_
3. Uncheck _Show favicon_
4. Click _Save configuration_.
6. If you are logged in as user 1 you should now see the indicator.
5. Do not create an Environment Switcher, as this module doesn't support that feature yet.
7. Now set the permissions for other users.

## Who Sees It?

Which users will see the indicator is determined by permissions, therefor user ID 1 will always see it.

1. Go to _People > Permissions > Environment Indicator_
2. Give _See all environment indicators_ to the anonymous and authenticated roles, or as appropriate.

See also [Live Dev Porter](@live_dev_porter).

## Set the Label

See also [Snippets](@snippets) for other ideas.

_settings.php_

```php
$config['environment_indicator.indicator']['name'] = 'Development';
```

## Set the Colors

_settings.php_

```php
$config['environment_indicator.indicator']['bg_color'] = '#00339a';
$config['environment_indicator.indicator']['fg_color'] = '#fff';
```

## Set Double-Click-to-Hide Duration

_settings.php_

```php
$config['environment_indicator.indicator']['manual_cookie'] = 1800;
```
