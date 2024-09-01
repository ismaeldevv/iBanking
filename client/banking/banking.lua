isReady = false
while not isReady do Wait(200) end

local function drawBankingMarkers()
    for i = 1, #LOCATIONS_CONFIG do
        local coords = LOCATIONS_CONFIG[i]
        DrawMarker(22, coords.x, coords.y, coords.z, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 0.5, 0.5, 0.5, 255, 0, 0, 100, true, true, true, true, nil, false)
    end
end

local function findClosestBank()
    if IsNuiFocused() or IsPauseMenuActive() then return end

    for i = 1, #LOCATIONS_CONFIG do
        local bankCoords = LOCATIONS_CONFIG[i]

        while #(GetEntityCoords(PlayerPedId()) - bankCoords) <= 1.5 and not IsNuiFocused() and not IsPauseMenuActive() do
            ShowHelpNotification('~r~[E]~s~ - Access BANK')

            if IsControlJustPressed(0, 38) then
                if #Accounts < 1 then return ShowNotification('Create a new ~r~Account~s~!') end
            end

            Wait(0)
        end
    end

    return true
end

CreateThread(function()
    while true do
        Wait(findClosestBank() and 500 or 1000)
    end
end)

CreateThread(function ()
    while true do
        drawBankingMarkers()
        Wait(0)
    end
end)