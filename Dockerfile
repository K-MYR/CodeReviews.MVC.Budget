# Bundle FrontEnd
FROM node:22 AS frontend-build

WORKDIR /src/MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp

COPY MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/package*.json ./
RUN npm ci

COPY MVC.Budget.K-MYR/MVC.Budget.K-MYR/ClientApp/ ./
RUN npm run build_prod


# Build Backend
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

COPY ["MVC.Budget.K-MYR/MVC.Budget.K-MYR/MVC.Budget.K-MYR.csproj", "MVC.Budget.K-MYR/MVC.Budget.K-MYR/"]
COPY ["MVC.Budget.K-MYR/MVC.Budget.K-MYR.Common/MVC.Budget.K-MYR.Common.csproj", "MVC.Budget.K-MYR/MVC.Budget.K-MYR.Common/"]

RUN dotnet restore "MVC.Budget.K-MYR/MVC.Budget.K-MYR/MVC.Budget.K-MYR.csproj"

COPY . .

COPY --from=frontend-build \
    /src/MVC.Budget.K-MYR/MVC.Budget.K-MYR/wwwroot/dist \
    /src/MVC.Budget.K-MYR/MVC.Budget.K-MYR/wwwroot/dist

WORKDIR "/src/MVC.Budget.K-MYR/MVC.Budget.K-MYR"

RUN dotnet publish "MVC.Budget.K-MYR.csproj" \
    -c Release \
    -o /app/publish


# Final Image
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final

WORKDIR /app

COPY --from=build /app/publish .

ENTRYPOINT ["dotnet", "Spendwise.Application.dll"]