<!--
id: config_fixer
tags: ''
-->

# Configuring with Config Fixer

This page refers to usage with [Drupal Config Fixer](https://github.com/aklump/drupal-config-fixer)

_.web\_package/hooks/build/00\_config\_fixer.php_

```php
use AKlump\Drupal\ConfigFixer\ConfigFixer;

$fix = new ConfigFixer('./private/default/config/base');

$fix->modules()
  ->disable('environment_indicator')
  ->disable('environment_indicator_loft');

$fix
  ->roles(['anonymous', 'authenticated'])
  ->removeDependency('environment_indicator')
  ->removePermission('access environment indicator');

$fix->files()
  ->delete('environment_indicator.settings.yml');
```

After configuration export and before deployment run this above to remove the dev configuration.
