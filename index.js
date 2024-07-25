import { validate } from 'deep-email-validator'
/**
 *
 *  Проверяет, что письмо выглядит как письмо, т. е. содержит «@» и «.» справа от него.
    Проверяет распространенные опечатки, например example@gmaill.com, с помощью mailcheck.
    Проверяет, не сгенерировано ли письмо одноразовым почтовым сервисом, используя disposable-email-domains.
    Проверяет наличие MX-записей в DNS.
    Убедитесь, что SMTP-сервер запущен.
    Проверяет наличие почтового ящика на SMTP-сервере.
 */
async function validateEmail(email) {
	const res = await validate({
		email: email,
		sender: email,
		validateRegex: true,
		validateMx: true,
		validateTypo: true,
		validateDisposable: true,
		validateSMTP: true,
	})

	res.valid
		? console.log({ message: `${email} - почта является ВАЛИДНОЙ`, ...res })
		: console.log({ message: `${email} - почта является НЕ ВАЛИДНОЙ`, ...res })
}

validateEmail('kekos1488@gmail.com')
