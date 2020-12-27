<?php

//###############################################################
//  Setting up an attachment form
//###############################################################

// the maximum total file size is set to 5MB (5*1024*1024=5242880)
const MAX_FILES_SIZE = 5242880;

// allowed file extensions
$allowedExtensions = array('gif', 'jpg', 'png', 'txt');

// Total number of downloaded files
const COUNT_FILES = 5;



//###############################################################
//  Sending a letter to the administrator
//###############################################################

// administrator email
// example: 'manager@mail.ru'
const MAIL_ADDRESS = 'werstka_saita@ukr.net';

// add another admin email
// example: 'manager@mail.ru'
const MAIL_ADDRESS_TWO = '';

// from which email the letter will be sent to the administrator
// example: 'no-reply@mydomain.ru'
const MAIL_FROM = 'saka150577@werstka-saita.co.ua';



//###############################################################
//  Sending a message to a site visitor
//###############################################################

// allow sending a message to the visitor
// to send change to true
const MAIL_CLIENT = true;

// subject line for the visitor
const SUBJECT_MAIL_CLIENT = 'Сообщение с site-name';

// from which email the letter will be sent to the visitor
// example: 'no-reply@mydomain.ru'
const MAIL_FROM_CLIENT = '';



//###############################################################
//  Settings SMTP
//###############################################################

// enable SMTP sending
// Change to true to enable
const SMTP_ON = false;

// SMTP server
// example: 'smtp.mail.ru'
const SMTP_SERVER = '';

// Your mail
// example: 'username@mail.ru'
const USER_NAME = '';

// password from mail
const PASSWORD = '';

// encryption protocol
// example: 'ssl'
const SMTP_SECURE = 'ssl';

// SMTP port
const SMTP_PORT = 465;