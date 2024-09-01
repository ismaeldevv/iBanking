Citizen.CreateThread(function()
    while MySQL == nil do
        Wait(200)
    end

    print('[^1FETCH^7] - prepare to read the tables : Logs, Accounts, Cards..')
    Wait(1000)
    Logs = MySQL.query.await('SELECT * FROM logs', {})
    Accounts = MySQL.query.await('SELECT * FROM accounts', {})
    Cards = MySQL.query.await('SELECT * FROM cards', {})
    Wait(1000)
    print('[^1SENDING^7] - prepare to send the tables to client : Logs, Accounts, Cards..')

    TriggerClientEvent('iBanking::setupTables', -1, Logs, Accounts, Cards)
end)
