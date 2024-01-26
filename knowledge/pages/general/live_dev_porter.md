<!--
id: live_dev_porter
tags: ''
-->

# Configuring with Live Dev Porter

This page refers to usage with [Live Dev Porter](https://github.com/aklump/live_dev_porter)

## Processor

```php
# Handle the configuration of development modules.
!  drush en environment_indicator_loft -y && echo "Failed to enable development modules." && exit 1
drush role-add-perm anonymous 'access environment indicator'
drush role-add-perm authenticated 'access environment indicator'
drush cdel -y environment_indicator.settings toolbar_integration
drush cset -y --input-format=yaml environment_indicator.settings toolbar_integration "toolbar: '0'"
drush cset -y environment_indicator.settings favicon 0
```
