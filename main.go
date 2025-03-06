package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"server/main/server"
	"strconv"
)

var Personas = []server.Persona{
	server.TestPersona1,
	server.TestPersona2,
}

func main() {
	r := gin.Default()
	r.GET("/test", testing)
	r.GET("/persona/id/:id", getPersonaByID)

	fmt.Println("Server is Runngin")

	r.Run(":8080")
}

func testing(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "First api"})
}

func getPersonaByID(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.ParseInt(idParam, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "No Persona available with this id "})
		return
	}

	for _, p := range Personas {
		if p.ID == id {
			c.JSON(http.StatusOK, p)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"message": "persona not found"})
}
