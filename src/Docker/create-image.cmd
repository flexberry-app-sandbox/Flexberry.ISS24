docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss24/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss24/app ../..
