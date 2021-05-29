<?php
if (isset($_COOKIE['auth'])) {
    unset($_COOKIE['auth']); 
    setcookie('auth', null, -1, '/'); 
    return true;
} else {
    return false;
}
?>