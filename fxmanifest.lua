fx_version 'cerulean'
game 'gta5'

author '__ismael'
description 'Banking System for FiveM'
version '1.0.0'
repository 'https://github.com/ismaeldevv/iBanking'

client_scripts { 'client/utils/*.lua', 'client/**/*.lua' }
server_scripts { '@oxmysql/lib/MySQL.lua', 'server/data/*.lua', 'server/*.lua' }
shared_scripts { 'shared/*.lua' }
