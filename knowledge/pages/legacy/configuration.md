<!--
id: configuration
tags: ''
-->

# Configuration



## How to Handle Modules?

1. Enable [Configuration Split](https://www.drupal.org/project/config_split)
1. Create a _Development_ (`dev`) split.
1. In _Complete Split > Modules_ add a check next to:
    1. Environment Indicator
    1. Environment Indicator Loft UX

## How to Handle Permissions?

1. Add the following to _settings.php_:

```php
// The reason that we're not using DRUPAL_ENV is that if that is overridden to
// PROD during local cache testing, the config export will give the wrong
// output.  This is a better way to determine that the site is running for a
// dev environment for the purposes of config_split module.
$is_dev_env = getenv('LANDO') !== FALSE;
$config['config_split.config_split.dev']['status'] = $is_dev_env;
$config['config_role_split.role_split.dev']['status'] = $is_dev_env;
$config['config_split.config_split.prod']['status'] = !$is_dev_env;
```

## When Pulling Live Database

I run the following after importing the live database in my local dev environment.  It seems I have to do both in this order, to get the permissions to import correctly.

```bash
drush config-split:import dev -y
drush config:import -y
```
