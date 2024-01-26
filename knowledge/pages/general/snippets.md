<!--
id: snippets
tags: ''
-->

# Snippets

_settings.php_

```php
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
```
