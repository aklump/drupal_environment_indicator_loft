<!--
id: aarons_strategy
tags: ''
-->

# My Usage/Configuration Strategy

(This is just one way to do it.)

1. I do not enable on my live instances, only test and dev.
2. The module configuration is not in the repository. The module is installed by Composer, so it's codebase is not in the repository, either.
3. I use [Live Dev Porter](https://github.com/aklump/live_dev_porter) to automatically enable the module during the pull workflow from live using a processor called _prepare\_db.sh_

    ```php
    ! drush en environment_indicator_loft -y && echo "Failed to enable development modules." && exit 1
    drush role-add-perm anonymous 'access environment indicator'
    drush role-add-perm authenticated 'access environment indicator'
    drush cdel -y environment_indicator.settings toolbar_integration
    drush cset -y --input-format=yaml environment_indicator.settings toolbar_integration "toolbar: '0'"
    drush cset -y environment_indicator.settings favicon 0
    ```

4. Then I use a [Web Package](https://github.com/aklump/web_package) build step called _00\_config\_fixer.php_ when building my application to disable and remove it's configuration after `drush config-export`. The build step uses [Config Fixer](https://github.com/aklump/drupal-config-fixer).

    ```php
    <?php
    $fix = new \AKlump\Drupal\ConfigFixer\ConfigFixer('./private/default/config/base/');
    
    $fix->modules()
      ->disable('environment_indicator')
      ->disable('environment_indicator_loft');
    
    $fix->roles(['anonymous', 'authenticated'])
      ->removeDependency('environment_indicator')
      ->removePermission('access environment indicator');

    $fix->files()
      ->delete('environment_indicator.settings.yml');
    ```
