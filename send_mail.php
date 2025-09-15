<?php
// Кому будет приходить письмо
$to = "maksimshulzztb99@gmail.com";  

// Получаем данные из формы
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$product = $_POST['product'];

// Тема письма
$subject = "Новый заказ с сайта";

// Текст письма
$message = "
Имя: $name
Телефон: $phone
Email: $email
Товар: $product
";

// Заголовки (от кого письмо)
$headers = "From: no-reply@mysite.com\r\n";
$headers .= "Reply-To: $email\r\n";

// Отправка
if (mail($to, $subject, $message, $headers)) {
    echo "Спасибо! Ваша заявка отправлена.";
} else {
    echo "Ошибка при отправке. Попробуйте снова.";
}
?>
