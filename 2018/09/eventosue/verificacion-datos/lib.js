function $E(name)
{
	return document.getElementById(name);
}

function validateText(name)
{
	return _validateText(name, true);
}

function validateHidden(name)
{
	return _validateText(name, false);
}

function _validateText(name, doFocus)
{
	var textBox = $E("s_" + name);
	if (textBox.value == "")
	{
		pass = false;
		failValidation(textBox, name, doFocus);
	}

	return pass;
}

function validateSelect(name)
{
	var ddl = $E("m_" + name);
	if (ddl[ddl.selectedIndex].value == "")
	{
		pass = false;
		failValidation(ddl, name, true);
	}

	return pass;
}

function validateCheck(name)
{
	if ($E("i_" + name).checked)
	{
		$E("s_" + name).value = $E("i_" + name).value;
	}
	else
	{
		$E("s_" + name).value = $E("i_" + name).getAttribute("negative_value");
	}
}

function failValidation(item, name, doFocus)
{
	$E("row_" + name).style.display = "";
	if (!hasFocus && doFocus)
	{
		item.focus();
		hasFocus = true;
	}
}

function hideRow(name)
{
	$E("row_" + name).style.display = "none";
}
