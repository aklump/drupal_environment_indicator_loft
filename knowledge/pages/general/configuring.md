<!--
id: configuring
tags: ''
-->

# Configuring

## Via Web UI

1. Open _/admin/config/development/environment-indicator_
1. Uncheck all _Toolbar integration_ boxes and _Save configuration_.
1. Do not create an Environment Switcher.

## Who Sees It?

Which users will see the indicator is determined by permissions.

1. Go to _People > Permissions > Environment Indicator_
2. Setup the correct permissions.

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

## Handling Site Configuration Files

@see [Config Fixer](@config_fixer)
