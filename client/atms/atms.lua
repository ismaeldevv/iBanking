while not isReady do Wait(200) end

local atms = ATMS_CONFIG;
for i = 1, #atms do atms[i] = GetHashKey(atms[i]) end

local function findClosestAtm()
	if IsNuiFocused() or IsPauseMenuActive() then return end;

	local x, y, z = table.unpack(GetEntityCoords(PlayerPedId()));

	for i = 1, #atms do
        local atm = GetClosestObjectOfType(x, y, z, 1.5, atms[i], false, false, false)

		if atm > 0 then
			local atmCoords = GetEntityCoords(atm)

            while #(GetEntityCoords(PlayerPedId()) - atmCoords) <= 1.5 and not IsNuiFocused() and not IsPauseMenuActive() do
				ShowHelpNotification('~r~[E]~s~ - Access ATM')

                if IsControlJustPressed(0, 38) then
					if #Accounts < 1 then return ShowNotification('Create a new ~r~Account~s~!\nGo to the bank') end
                end

                Wait(0)
            end

			return true
		end
	end
end

CreateThread(function()
    while true do
        Wait(findClosestAtm() and 500 or 1000)
    end
end)