<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'portofolio_db' );

/** Database username */
define( 'DB_USER', 'fatihizzul' );

/** Database password */
define( 'DB_PASSWORD', '{fath_WP4dmin}' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'c:j(HIb$yOE{~/dZA Rj!|1?GaI!0t=k_UXNSIRCRkhcsJFDWjmD+@*xovQ?6:Jl' );
define( 'SECURE_AUTH_KEY',  'Ukedw&{b1LV>4B3Zr!<J~}V_PB;z@|qe(*S]odBe5h%3f.=,&Q(sIR8E4kvfx Zk' );
define( 'LOGGED_IN_KEY',    '_|2h! 6S:C/4R=7o5Yh}flx4E_i,r0t`{/H$6E%mQ4z.clczin%|L+,<n6dfAL_Y' );
define( 'NONCE_KEY',        'E$,fQ.7(QS23qQVCK+=!X*c;d:o7:=b6Bi(D/o (oFI:_?_W30]<O,nL1N8G~fVi' );
define( 'AUTH_SALT',        'w <VF2TBUb<K:^B^16^zSLkaR10$`5^ $kmP.Ox<hiJwhczRN-FwDiLnEn<+7;,3' );
define( 'SECURE_AUTH_SALT', 'ebwkc23v>XQxzdW9EVrfM/IODhP&gHp580jTN.~}91MqWhc^ SfPpC0V{Usn{!Cy' );
define( 'LOGGED_IN_SALT',   'H/4QCu#r|~Fe}xIn4_&` L]KTr`Ypd]:oBlLpy#TG Cd,kbL=8_)QToRg6nN?M-V' );
define( 'NONCE_SALT',       '.YopKZM0Pp;A-8))HL0;UE2j5{fU?7pgfFR+?C`si[Fp^cRS{,2vtB%t(h9*g+5;' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
