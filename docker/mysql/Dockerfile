FROM mysql:5.7

ARG TZ=UTC
ENV TZ ${TZ}
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && chown -R mysql:root /var/lib/mysql/

COPY my.cnf /etc/mysql/conf.d/my.cnf

#RUN mkdir /var/lib/mysql-files && \
#    chown -R mysql:mysql /var/lib/mysql-files/ && \
#    chmod 700 /var/lib/mysql-files/

CMD ["mysqld"]

EXPOSE 3306
