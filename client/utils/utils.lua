function ShowHelpNotification(msg, thisFrame, beep, duration)
	AddTextEntry('bankingHelpNotification', msg)

	if thisFrame then
		DisplayHelpTextThisFrame('bankingHelpNotification', false)
	else
		if beep == nil then beep = true end
		BeginTextCommandDisplayHelp('bankingHelpNotification')
		EndTextCommandDisplayHelp(0, false, beep, duration or -1)
	end
end

function ShowNotification(message, notifyType, length)
	SetNotificationTextEntry('STRING')
	AddTextComponentString(message)
	DrawNotification(0, 1)
end