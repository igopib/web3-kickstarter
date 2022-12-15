// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract KickStarter {
    uint256 public totalProjects;
    uint256 public fundTimer;

    struct Projects {
        string projectName;
        uint256 projectId;
        uint256 fundGoal;
        address payable creator;
        bool finished;
        uint256 timeCreated;
    }

    // Keeps track of projectId => data type Items
    mapping(uint256 => Projects) public projects;

    mapping(address => uint256) public crowdEarning;

    constructor() {
        fundTimer = 30 days;
    }

    function createProject(
        string memory _projectName,
        uint256 _fundGoal
    ) public {
        totalProjects++;
        projects[totalProjects] = Projects(
            _projectName,
            totalProjects,
            _fundGoal,
            payable(msg.sender),
            false,
            block.timestamp
        );
    }
}
