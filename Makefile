build:
	sudo docker-compose build && touch logs/access.log
# setup:
# 	sudo docker exec -it -w /usr/app/src nodejs sequelize db:create && docker exec -it -w /usr/app/src nodejs sequelize db:migrate
up:
	sudo docker-compose up
stop:
	docker-compose down
destroy:
	sudo docker-compose down --rmi all